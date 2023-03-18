const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



exports.generateStory = async (req,res)=>{

    const {character, theme, subscription, description } = req.body

    const title = `generate a title of kids story the story description is ${description}`
    const prompt = `generate a kids story  approximatly 400 words this is all details you need ,
                    the story description: ${description}.
                    the story theme: ${theme}
                    `

    try {
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
          console.log(story.status);

          if (tit.status >= 200 && tit.status < 300 && story.status >= 200 && story.status < 300) {
            console.log('here');
            const data = {
              title: tit.data.choices,
              story: story.data.choices
            }

            res.status(200).json(data);
          } else {
            res.status(400).json({
              message: 'false'
            })
          }

          // console.log('stoooooory',story, tit);
          // res.send({
          //   title: tit.data,
          //   story: story.data
          // })
    } catch (error) {
        console.log(error);
        res.send(error)
    }

}