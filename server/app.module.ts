import { Module } from "@nestjs/common";
import { AngularUniversalModule } from "@nestjs/ng-universal";
import { join } from "path";
import { TestController } from './src/test/test.controller';

const domino = require("domino");
const fs = require("fs");
const path = require("path");
const Zone = require("zone.js");
const DIST_FOLDER = path.join(process.cwd(), "dist");
const template = fs
  .readFileSync(path.join(DIST_FOLDER, "browser", "index.html"))
  .toString();
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist/server`);
import fetch from "node-fetch";

win.fetch = fetch;
global["window"] = win;
global["DOMTokenList"] = win.DOMTokenList;
global["Node"] = win.Node;
global["Text"] = win.Text;
global["HTMLElement"] = win.HTMLElement;
global["navigator"] = win.navigator;
global["Event"] = win.Event;
global["Event"]["prototype"] = win.Event.prototype;
Object.defineProperty(win.document.body.style, "transform", {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
global["document"] = win.document;
global["CSS"] = null;

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), "dist/browser"),
      bundle: require("../server/main"),
      liveReload: true
    })
  ],
  controllers: [TestController]
})
export class ApplicationModule {}
