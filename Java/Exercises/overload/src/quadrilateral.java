public class quadrilateral {

  public static void area(double side) {
    System.out.println(side * side);
  }

  public static void area(double side1, double side2) {
    System.out.println(side1 * side2);
  }

  public static void area(double biggerBase, double lessBase, double height) {
    System.out.println(((biggerBase + lessBase) * height) / 2);
  }
}
