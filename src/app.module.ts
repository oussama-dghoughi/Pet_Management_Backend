import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person.module'; // Assure-toi du bon chemin
import { Person } from './entities/person.entity';
import { Animal } from './entities/animal.entity';
import { AnimalModule } from './animal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Data_management',
      entities: [Person, Animal],
      synchronize: true,
      driver: require('mysql2'),
    }),
    PersonModule,
    AnimalModule,
  ],
})
export class AppModule {}
