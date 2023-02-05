const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



exports.generateStory = async (req,res)=>{

    const {character, theme, subscription, description } = req.body

    const prompt = `generate story for kids book and title of the story    in american theme description: a little kid try to learn how to swim and characters are father: sam little kid: achraf`

    try {
        const story = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: 4000,
            temperature: 0
          });
          console.log('heeere');
          res.send(story.data)
    } catch (error) {
        res.send(error)
    }

}