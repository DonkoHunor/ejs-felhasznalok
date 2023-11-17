/* eslint-disable prettier/prettier */
export interface Felhasznalo {
  nev: string;
  nem: 'férfi' | 'nő';
  szul_datum: string;
  egyenleg: number;
  aktivitas: 'aktív' | 'inaktív';
}
