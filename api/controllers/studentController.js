const Student = require('../models/studentModel');

const studentController = {

    getStudent: async(req, res)=>{
      try {
        const students = await Student.get();
        
        if (students.length === 0) {
          return res.status(404).json({ message: 'No se encontraron estudiantes.' });
        }
  
        return res.status(200).json(students);
      } catch (error) {
        console.error('Error al obtener todos los estudiantes:', error);
        
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    
    },

    getStudentById: async(req, res)=>{
        const id = req.params.id;
        try {
            const [rows, fields] = await Student.getId(id);
            if (rows.length === 0) {
              res.status(404).json({ error: 'studiante no encontrado' });
            } else {
              res.json(rows[0]);
            }
          } catch (error) {
            console.error('Error al obtener el estudiante por ID:', error);
            res.status(500).json({ error: 'Error al obtener el estudiante por ID' });
          }
    },

    postStudent: async(req, res)=>{
        const { nombre, apellido, edad, calificacion } = req.body;
        if (!nombre || !apellido || !edad  || !calificacion) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
          }
          try {
            const result = await Student.post(nombre, apellido, edad, calificacion);
            res.status(201).json({ message: 'estudiante insertado correctamente', id: result.insertId });
          } catch (error) {
            console.error('Error al insertar al estudiante:', error);
            res.status(500).json({ error: 'Error al insertar al estudiante' });
          }
    },

    putStudent: async(req, res)=>{
        const id = req.params.id;
        const { nombre, apellido, edad, calificacion } = req.body;
        try {
          await Student.put(id, nombre, apellido, edad, calificacion);
          res.json({ message: 'estudiante actualizado correctamente' });
        } catch (error) {
          console.error('Error al actualizar el estudiante:', error);
          res.status(500).json({ error: 'Error al actualizar el estudiante' });
        }
      },
    
    deleteStudent: async(req, res)=>{
        const id = req.params.id;
        try {
          await Student.delete(id);
          res.json({ message: 'estudiante eliminado correctamente' });
        } catch (error) {
          console.error('Error al eliminar el estudiante:', error);
          res.status(500).json({ error: 'Error al eliminar el estudiante' });
        }
    }  

};

module.exports= studentController;