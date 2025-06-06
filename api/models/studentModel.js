const pool = require('../db/db');

const Student = {

    get: async()=>{
       try {
        const [result] = await pool.query(`SELECT * FROM students`);
        return result;
       } catch (error) {
        console.log("erro al obtener");
        throw error;
       }
    },

    post: async(nombre, apellido, edad, calificacion)=>{
        try {
            const [result] = await pool.execute(
              'INSERT INTO students (nombre, apellido, edad, calificacion) VALUES (?, ?, ?, ?)',
              [nombre, apellido, edad, calificacion]
            );
            return result;
          } catch (error) {
            console.error('Error al insertar el estudiante:', error);
            throw error;
          }
    },

    put: async(id, nombre, apellido, edad, calificacion)=>{
        try{
            const result = await pool.execute(
                'UPDATE students SET nombre = ?, apellido = ?, edad = ?, calificacion = ? WHERE id = ?',
                [nombre, apellido, edad, calificacion, id]
            );
            return result;
        } catch (error){
            console.error('Error al actualizar el estudiante:', error);
            throw error;
        }
    },

    delete: async(id)=>{
        try{
            const result = await pool.execute(
                'DELETE FROM students WHERE id = ?',
                [id]
            );
            return result;
        } catch (error){
            console.error('Error al actualizar el estudiante:', error);
            throw error;
        }
    },

    getId: async(id)=>{
        try{
            const result = await pool.execute(
                'SELECT * FROM students WHERE id = ?',
                [id]
            );
            return result;
        } catch (error){
            console.error('Error al encontrar el estudiante:', error);
            throw error;
        }
    }

};

module.exports = Student;