import { Guardian } from 'types';
import { http } from './api'

class GuardiansService {

  async getAll() {
    const res = await http.get<Guardian[]>(`/guardians`)
    return res.data;
  }

  async getById(id: number) {
    const res = await http.get<Guardian>(`/guardians/${id}`)
    return res.data;
  }

  async post(guardian: Guardian) {
    const res = await http.post(`/guardians`, guardian)
    return res.data;
  }

  async reset() {
    const res = await http.delete(`/guardians/all`);
    return res.data;
  }
}

export const guardiansService = new GuardiansService()