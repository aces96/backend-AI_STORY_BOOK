const { Configuration, OpenAIApi } = require("openai");
const AWS = require('aws-sdk');
const {getImages} = require('../helpers/S3')
const dotenv = require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const s3 = new AWS.S3({
  endpoint: 'https://fra1.digitaloceanspaces.com',
  accessKeyId: process.env.DIGITAL_OCEAN_SPACES_PUB_KEY,
  secretAccessKey: process.env.DIGITAL_OCEAN_SPACES_SEC_KEY
});



exports.generateStory = async (req,res)=>{

    const {character, theme, subscription, description } = req.body

    const title = `generate a title of kids story the story description is ${description}`
    const prompt = `generate a kids story  approximatly 400 words this is all details you need ,
                    the story description: ${description}.
                    the story theme: ${theme}.
                    the character are: ${character.map((e)=>{
                      return `${e}, `
                    })}
                    `

    try {
      let img
      const bucketName = 'dataibook';
      const   folderName = `SummerFoxStoryTime/Basic/${theme}`;
    
    // Get a list of all the files in the folder
    s3.listObjects({
      Bucket: bucketName,
      Prefix: folderName
    }, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        if (data.Contents.length === 0) {
          console.log(`No files found in folder: ${folderName}`);
          return;
        }
        // Choose a random file from the list
        const randomIndex = Math.floor(Math.random() * data.Contents.length);
        const randomFile = data.Contents[randomIndex];
    
        // Get the presigned URL for the chosen file
        const params = {
          Bucket: bucketName,
          Key: randomFile.Key
        };
        const url = s3.getSignedUrl('getObject', params);
    
        console.log('Random file URL:', url);

        img = url
    
        return url
      }
    })
        const tit = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: title,
          max_tokens:500,
          top_p:1,
          temperature:0.5
        });

        const story = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens:1000,
            n:1,
            stop:'None',
            temperature:0.5
          });

          console.log(tit.status);
          
          if (tit.status >= 200 && tit.status < 300 && story.status >= 200 && story.status < 300) {
            console.log(story.data);
            console.log('here');




            res.status(200).json({
              title: tit.data.choices,
              story: story.data.choices,
              image: img
            });
          } else {
            res.status(400).json({
              message: 'false'
            })
          }
    } catch (error) {
        console.log(error);
        res.send(error)
    }

}