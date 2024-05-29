import { starships } from "../../index.mjs";

export const findStarships = async (req, res) => {
    try {
        let pageSize = parseInt(req.query.pageSize) || 12;
        let page = parseInt(req.query.page) || 1;
        let name = req.query.name || '';

        let skip = (page - 1) * pageSize;

        const query = name ? { name: { $regex: name, $options: 'i' } } : {};
        const result = await starships.find(query).skip(skip).limit(pageSize).toArray();

        res.status(200).json(result);
    } catch (err) {
        console.error(`Error fetching planets: ${err}`);
        res.status(500).json({ error: 'An error occurred while fetching planets' });
    }
}
