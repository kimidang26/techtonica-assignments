import express from "express"; 
const router = express.Router();

// server/routes/ events.mjs;

import db from "../db/db-connection.js";

/* GET events listing. */

router.get('/', async function (req, res, next) {

  try {
    const events = await db.any('SELECT * FROM events', [true]);
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* post request goes here */
router.post('/', async (req, res) => {
    const events = {
      id: req.body.id,
      name: req.body.name,
      date: req.body.date,
      description: req.body.description,
      category: req.body.category,
      

    };
    console.log(events);
    try {
      const createdEvents = await db.one(
        'INSERT INTO events(name, id, date, description, category) VALUES($1, $2. $3, $4, $5) RETURNING *',
        [events.name, events.id, events.date, events.description, events.category]
      );
      console.log(req.body);
      res.send(createdEvents);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });


/* delete request goes here  */

router.delete('/:id', async (req, res) => {
    // : acts as a placeholder
    const eventId = req.params.id;
    try {
      await db.none('DELETE FROM events WHERE id=$1', [eventId]);
      res.send({ status: 'success' });
    } catch (e) {
      return res.status(400).json({ e });
    }
  });


export default router;