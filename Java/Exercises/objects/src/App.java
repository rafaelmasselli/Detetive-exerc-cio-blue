public class App {
    public static void main(String[] args) throws Exception { 
    }


    public void carExemple(){
        car Car = new car();

        Car.setColor("black");
        Car.setTankCapacity(100);
        Car.setModel("nisan");
        System.out.println( Car.getClass());
        System.out.println( Car.getColor());
        System.out.println( Car.getTankCapacity());

        car Car2 = new car("black", "nisan", 111);
        System.out.println( Car2.getClass());
        System.out.println( Car2.getColor());
        System.out.println( Car2.getTankCapacity());
    }
}
