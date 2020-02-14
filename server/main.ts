import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

async function bootstrap() {
  console.log(process.env.DATABASE_USER);
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix("api");
  await app.listen(4200);
}
bootstrap();
