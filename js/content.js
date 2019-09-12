"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
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
        res.write("<head>");
        res.write("<title>TeglalapTK</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>Téglalap területe és kerülete</h1>");
        const a = 5; // number --> 64 bites lebegőpontos szám
        const b = 5;
        res.write(`<h2>a=${a}</h2>`);
        res.write("</body> </html>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map