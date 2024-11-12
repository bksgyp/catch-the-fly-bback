import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
    'http://localhost:3000',
    'https://port-next-catch-the-fly-ffront-m3ecvopi1376b5ab.sel4.cloudtype.app/',
    ],
    credentials: true,
    });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
