const pool = require('../utils/pool');

// CREATE ALL CRUD ROUTES HERE

module.exports = class ModelData {

  constructor(row) {
    this.id = row.id,
    this.name = row.name,
    this.status = row.status,
    this.species = row.species
  }

// POST (create)

static async insert({ name, status, species }) {
  const { rows } = await pool.query(`
  INSERT INTO character (name, status, species) VALUES ($1, $2, $3) RETURNING *`, 
  [name, status, species]
  );
  return new ModelData(rows[0]);
};

// GET (index)

static async allCharacters() {
  const { rows } = await pool.query(
    `SELECT * FROM character`
  );
  return rows.map(row => new ModelData(row));
}

// GET (id)

static async getCharacterById(characterID) {
  const { rows }= await pool.query(
    `SELECT * FROM character WHERE id=$1`, 
    [characterID]
  );
  return rows[0];
}
    
// PUT(update)

static async updateCharacterById(characterID, obj) {
  const { rows } = await pool.query(
    `UPDATE character SET name=$1, status=$2, species=$3 WHERE id=$4 RETURNING *`,
    [characterID, obj.name, obj.status, obj.species]
  );
  return rows[0];
}

// DELETE (destroy)

static async deleteById(characterID) {
  const { rows } = await pool.query(
    `DELETE FROM character WHERE id=$1 RETURNING *`,
    [characterID]
  );
 
}
};

  
  




