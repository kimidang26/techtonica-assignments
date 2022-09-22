import db from "../db/db-connection.js";
import express from "express"; 
const router = express.Router();



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
    console.log(events, ' hello everyone');
    try {
      const createdEvent = await db.one(
        'INSERT INTO events(id, name, description, category, date) VALUES($1,$2,$3,$4, $5) RETURNING *',
        [events.id, events.name, events.description, events.category, events.date]
      );
      console.log(createdEvent);
      res.send(createdEvent);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  });


/* delete request goes here  */

// router.delete('/:id', async (req, res) => {
//     // : acts as a placeholder
//     const eventsId = req.params.id;
//     try {
//       await db.none('DELETE FROM events WHERE id=$1', [eventsId]);
//       res.send({ status: 'success' });
//     } catch (e) {
//       return res.status(400).json({ e });
//     }
//   });


export default router;