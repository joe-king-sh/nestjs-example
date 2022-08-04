import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    const obj = { a: 123, b: 234 };
    return JSON.stringify(obj);
  }

  @Get("/bye")
  getByThere() {
    return "bye!";
  }
}
