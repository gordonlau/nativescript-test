"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // Your TypeScript logic goes here
        this.counter = 0;
    }
    AppComponent.prototype.increment = function () {
        this.counter += 1;
    };
    AppComponent.prototype.decrement = function () {
        this.counter -= 1;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            styleUrls: [
                "app.component.css"
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFTMUM7SUFQQTtRQVFFLGtDQUFrQztRQUNsQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBUWQsQ0FBQztJQU5DLGdDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxPQUFPLElBQUcsQ0FBQyxDQUFFO0lBQ3BCLENBQUM7SUFUVSxZQUFZO1FBUHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUMsb0JBQW9CO1lBQ2hDLFNBQVMsRUFBQztnQkFDUixtQkFBbUI7YUFDcEI7U0FDRixDQUFDO09BQ1csWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOlwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczpbXG4gICAgXCJhcHAuY29tcG9uZW50LmNzc1wiXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBjb3VudGVyID0gMDtcblxuICBpbmNyZW1lbnQoKXtcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgfVxuICBkZWNyZW1lbnQoKXtcbiAgICB0aGlzLmNvdW50ZXIgLT0xIDtcbiAgfVxufVxuIl19