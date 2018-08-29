import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
var platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule)
    .catch(function (err) { return console.log(err); });
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // ����� ������������ ���������� ������� ����� ������� app, ������� �������� ������
        var oldRootElem = document.querySelector('app');
        var newRootElem = document.createElement('app');
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        platform.destroy();
    });
}
//# sourceMappingURL=main.js.map