import { Module } from "@nestjs/common";
import path from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { TodoModule } from "./todo/todo.module";

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ["./**/*.graphql"],
            definitions: {
                path: path.join(
                    process.cwd(),
                    "../shared/interfaces/graphql.ts"
                ),
                outputAs: "class",
            },
        }),
        TodoModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
