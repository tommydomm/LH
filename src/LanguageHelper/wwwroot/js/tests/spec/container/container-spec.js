/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../ioc/container.ts" />
var Tests;
(function (Tests) {
    var Castle = IoC.IocContainer;
    var LifeStyle = IoC.LifeStyle;
    let numberOfImplementations = 0;
    describe("container", () => {
        let container;
        beforeEach(() => {
            container = new Castle();
            numberOfImplementations = 0;
        });
        it("should call new on an interface once for singleton", () => {
            container.register("ITestable", Testable, LifeStyle.Singleton);
            container.register("ITestable", Testable, LifeStyle.Singleton);
            container.register("ITestable", Testable, LifeStyle.Singleton);
            let testable = container.resolve("ITestable");
            expect(numberOfImplementations).toEqual(1);
        });
    });
    class Testable {
        constructor() {
            numberOfImplementations++;
        }
    }
})(Tests || (Tests = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzL3NwZWMvY29udGFpbmVyL2NvbnRhaW5lci1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRSxrREFBa0Q7QUFFbEQsSUFBTyxLQUFLLENBa0NYO0FBbENELFdBQU8sS0FBSyxFQUFDLENBQUM7SUFFVixJQUFPLE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ2pDLElBQU8sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFakMsSUFBSSx1QkFBdUIsR0FBVyxDQUFDLENBQUM7SUFFeEMsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNsQixJQUFJLFNBQXFCLENBQUM7UUFFMUIsVUFBVSxDQUFDO1lBQ1AsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7WUFDekIsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1lBQ3JELFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvRCxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRS9ELElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQVksV0FBVyxDQUFDLENBQUM7WUFFekQsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFLSDtRQUNJO1lBQ0ksdUJBQXVCLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMsRUFsQ00sQ0FpQ0YsSUFqQ08sS0FBTCxLQUFLLFFBa0NYIiwiZmlsZSI6InRlc3RzL3NwZWMvY29udGFpbmVyL2NvbnRhaW5lci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvamFzbWluZS9qYXNtaW5lLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2lvYy9jb250YWluZXIudHNcIiAvPlxuXG5tb2R1bGUgVGVzdHMge1xuICAgIGltcG9ydCBJQ29udGFpbmVyID0gSW9DLklDb250YWluZXI7XG4gICAgaW1wb3J0IENhc3RsZSA9IElvQy5Jb2NDb250YWluZXI7XG4gICAgaW1wb3J0IExpZmVTdHlsZSA9IElvQy5MaWZlU3R5bGU7XG4gICAgXG4gICAgbGV0IG51bWJlck9mSW1wbGVtZW50YXRpb25zOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIGRlc2NyaWJlKFwiY29udGFpbmVyXCIsICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lcjogSUNvbnRhaW5lcjtcbiAgICAgICAgXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyID0gbmV3IENhc3RsZSgpO1xuICAgICAgICAgICAgbnVtYmVyT2ZJbXBsZW1lbnRhdGlvbnMgPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGl0KFwic2hvdWxkIGNhbGwgbmV3IG9uIGFuIGludGVyZmFjZSBvbmNlIGZvciBzaW5nbGV0b25cIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlZ2lzdGVyKFwiSVRlc3RhYmxlXCIsIFRlc3RhYmxlLCBMaWZlU3R5bGUuU2luZ2xldG9uKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZWdpc3RlcihcIklUZXN0YWJsZVwiLCBUZXN0YWJsZSwgTGlmZVN0eWxlLlNpbmdsZXRvbik7XG4gICAgICAgICAgICBjb250YWluZXIucmVnaXN0ZXIoXCJJVGVzdGFibGVcIiwgVGVzdGFibGUsIExpZmVTdHlsZS5TaW5nbGV0b24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGVzdGFibGUgPSBjb250YWluZXIucmVzb2x2ZTxJVGVzdGFibGU+KFwiSVRlc3RhYmxlXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBleHBlY3QobnVtYmVyT2ZJbXBsZW1lbnRhdGlvbnMpLnRvRXF1YWwoMSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIGludGVyZmFjZSBJVGVzdGFibGUge1xuICAgIH1cbiAgICBcbiAgICBjbGFzcyBUZXN0YWJsZSBpbXBsZW1lbnRzIElUZXN0YWJsZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgbnVtYmVyT2ZJbXBsZW1lbnRhdGlvbnMrKztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
