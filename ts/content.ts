import * as fs from "fs";
import * as http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";
export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        //    if (req.url === "/favicon.ico") {
        //       res.writeHead(200, { "Content-Type": "image/x-icon" });
        //     fs.createReadStream("favicon.ico").pipe(res);
        //     return;
        //    }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang ='hu'>");
        // A weboldal fejléce
        res.write("<head><title>TeglalapTK</title></head>");
        res.write("<body><form style = 'font-family:Courier; font-size: 24px'>");

        res.write("<h1>Téglalap területe és kerülete</h1>");
        const querry: ParsedUrlQuery = url.parse(req.url, true).query;
        const a: number = querry.aInput === undefined || querry.aInput === "" ? 5 : parseFloat(querry.aInput as string);
        const b: number = querry.bInput === undefined || querry.bInput === "" ? 6 : parseFloat(querry.bInput as string);
        res.write("<p>a= ");
        res.write(`<input type= 'number' name="aInput" value=${a} onChange='this.form.submit=();'></p>`);
        res.write("<p>b= ");
        res.write(`<input type= 'number' name="bInput" value=${b} onChange='this.form.submit=();'></p>`);
        res.write(`<p2>b=${b}</p2>`);
        const terulet: number = a * b;
        const kerulet: number = 2 * (a * b);
        res.write(`<p2>a=${terulet}</p2>`);
        res.write(`<p2>a=${kerulet}</p2>`);
        res.write("</form></body> </html>");
        res.end();
    }
}
