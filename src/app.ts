import calculatorView from "./view/calculatorView";
import {CalculatorController} from "./controller/calculatorController";

const app = {
  view : calculatorView(),
  controller : new CalculatorController()
};
