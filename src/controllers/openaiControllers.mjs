import OpenAI from 'openai';


const getCategories = async (req,res) => {
    try {
        
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_KEY,
        });
        
        const textOfSellers = req.body.textOfSellers;

        const completion = await openai.chat.completions.create({
            messages: [{"role": "system", "content": 'Identify a category associated with a given seller name. If the provided name appears to be a personal name, classify it as a "small business." Generate ajson ready to parse in javascript containing "seller" : "category" for every single seller'},
                {"role": "user", "content": textOfSellers}],
            model: "gpt-3.5-turbo-1106",
            response_format: { type: "json_object" },
            temperature: 0.4
        });

        res.json(completion);
        
    } catch (error) {
        // Manejar errores internos del servidor
        console.error('Error en el servidor:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default getCategories