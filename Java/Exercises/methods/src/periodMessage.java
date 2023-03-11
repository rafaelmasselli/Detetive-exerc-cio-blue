import java.time.LocalTime;

public class periodMessage {
  static public String message() {
    LocalTime currentTime = LocalTime.now();
    int twoFirstHours = currentTime.getHour();
    if (twoFirstHours > 6 && twoFirstHours < 12)
      return "Bom dia princesa";
    else if (twoFirstHours >= 12 && twoFirstHours < 18)
      return "Boa tarde princesa";
    else
      return "Boa noite princesa";
  }
}
