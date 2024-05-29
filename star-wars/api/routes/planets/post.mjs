import { planets } from "../../index.mjs";

export const postPlanets = async (req,res) => {
    const requiredFields = [
        'diameter', 'rotation_period', 'orbital_period', 'gravity', 'population', 
        'climate', 'terrain', 'surface_water', 'name'
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

        const insertResult = await planets.insertOne(add);

        res.status(201).send({ message: 'Document successfully inserted', count: insertResult.insertedCount });
    } catch (err) {
        res.status(500).send({ error: 'An error occurred while inserting the documents' });
    }
}