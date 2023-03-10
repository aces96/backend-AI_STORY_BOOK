const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



exports.generateStory = async (req,res)=>{

    const {character, theme, subscription, description } = req.body

    console.log(req.body);
    const title = `generate a title of kids story the story description is ${description}`
    const prompt = `in ${theme} theme i want to generate a kids story  approximatly 500 words the story description is ${description} `
    console.log(prompt);

    try {
        const tit = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: title,
          max_tokens:2000,
          top_p:1,
          temperature:0.5
        });

        const story = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens:1000,
            n:1,
            stop:'None',
            temperature:0.5
          });

          console.log(story.data);
          res.send({
            title: tit.data,
            story: story.data
          })
    } catch (error) {
        console.log(error.data);
        res.send(error)
    }

}