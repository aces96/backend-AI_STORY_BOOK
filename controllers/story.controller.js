const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



exports.generateStory = async (req,res)=>{

    const {character, theme, subscription, description } = req.body

    const prompt = `generate a story with the title for kids the theme is american where a little kid try to learn how to swim and characters are father: sam little kid: achraf`

    try {
        const story = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: 1000
          });

          res.send(story)
    } catch (error) {
        res.send(error)
    }

}