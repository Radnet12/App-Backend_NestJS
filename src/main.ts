import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Изучения NestJS")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("Swagger 1.0.0")
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("/api/docs", app, swaggerDocument);

  await app.listen(PORT, () =>
    console.log(`Server started on the port: ${PORT}`)
  );
}

start();
