public class car {
  String color;
  String model;
  int tankCapacity;

  void setColor(String color) {
    this.color = color;
  }

  String getColor(){
    return color;
  } 

  void setModel(String model) {
    this.model = model;
  }

   String getModel() {
    return model;
  } 

   void setTankCapacity(int tankCapacity) {
    this.tankCapacity = tankCapacity;
  }

  int getTankCapacity() {
    return tankCapacity;
  }
  double totalTankValue(double valueFue){
    return tankCapacity + valueFue;
  }

  public car(){
  }

  car(String color, String model, int tankCapacity){
    this.color = color;
    this.model = model;
    this.tankCapacity = tankCapacity;
  }



}
