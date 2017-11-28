"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        console.log("Hello World");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
            styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDO0lBQ0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFIVSxZQUFZO1FBakJ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJIQUdUO1lBQ0QsTUFBTSxFQUFFLENBQUMsd1FBU1IsQ0FBQztTQUNILENBQUM7O09BQ1csWUFBWSxDQUl4QjtJQUFELG1CQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcGxlXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+PC9BY3Rpb25CYXI+XG4gICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2FwcGxlLmpwZ1wiPjwvSW1hZ2U+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwKTsgfVxuICAgIH1cbiAgICBJbWFnZSB7XG4gICAgICBhbmltYXRpb24tbmFtZTogc3BpbjsgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZFwiKTtcbiAgfVxufVxuIl19