import { starships } from "../../index.mjs";

export const postStarships = async (req,res) => {
    const requiredFields = [
        'model', 'starship_class', 'manufacturer', 'cost_in_credits', 'length', 
        'crew', 'max_atmosphering_speed', 'hyperdrive_rating',
        'MGLT','cargo_capacity','consumables','name'
    ];

    try {
        const body = req.body;
        
        if (!body) {
            return res.status(400).send({ error: `Json body is required` });
        }

        if (!body.properties){
            return res.status(400).send({ error: `Field properties is required` });
        }

        const properties = body.properties
        let add = {}

        for (const field of requiredFields) {
            if (!properties[field]) {
                return res.status(400).send({ error: `Field ${field} is required` });
            }
            add[field] = properties[field]
        }

        const timestamp = new Date().toISOString();
        add.created = timestamp;

        const insertResult = await starships.insertOne(add);

        res.status(201).send({ message: 'Document successfully inserted', count: insertResult.insertedCount });
    } catch (err) {
        res.status(500).send({ error: 'An error occurred while inserting the documents' });
    }
}