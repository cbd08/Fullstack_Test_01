import { Request, Response } from 'express';
import { loginUser, registerUser } from './auth.service';

export async function register(req: Request, res: Response) { 
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'name, email y password son requeridos' });
    }

    const user = await registerUser({ name, email, password });
    return res.status(201).json(user);
  } catch (error: any) {
    if (error.message === 'EMAIL_TAKEN') {
      return res.status(409).json({ message: 'El email ya está registrado' });
    }

    console.error('Error en register:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'email y password son requeridos' });
    }

    const result = await loginUser({ email, password });
    return res.json(result);
  } catch (error: any) {
    if (error.message === 'INVALID_CREDENTIALS') {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
