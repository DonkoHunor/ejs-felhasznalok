import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Felhasznalo } from './felhasznalo';

const felhasznalok: Felhasznalo[] = [
  {
    nev: 'felhasznalo1',
    nem: 'férfi',
    szul_datum: '1970.03.24',
    egyenleg: 0,
    aktivitas: 'aktív',
  },
  {
    nev: 'felhasznalo2',
    nem: 'nő',
    szul_datum: '1971.04.22',
    egyenleg: 124000,
    aktivitas: 'inaktív',
  },
  {
    nev: 'felhasznalo3',
    nem: 'férfi',
    szul_datum: '1976.07.12',
    egyenleg: 600,
    aktivitas: 'inaktív',
  },
  {
    nev: 'felhasznalo4',
    nem: 'nő',
    szul_datum: '1983.06.04',
    egyenleg: 600000,
    aktivitas: 'aktív',
  },
  {
    nev: 'felhasznalo5',
    nem: 'nő',
    szul_datum: '1999.11.20',
    egyenleg: 20000,
    aktivitas: 'inaktív',
  },
  {
    nev: 'felhasznalo6',
    nem: 'nő',
    szul_datum: '2002.07.01',
    egyenleg: -100000,
    aktivitas: 'aktív',
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('felhasznalok')
  getFelhasznalok() {
    return { felhasznalok };
  }
}
