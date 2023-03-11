package Fila;

public class Fila {
  private int[] elements;
  private int start;
  private int end;

  public Fila(int Length) {
    elements = new int[Length];
    start = 0;
    end = -1;
  }

  public void enqueue(int element) {
    if (end == elements.length - 1) {
      throw new RuntimeException("Fila cheia!");
    }
    end++;
    elements[end] = element;
  }

  public boolean isEmpty() {
    return start > end;
  }

  public int dequeue() {
    if (isEmpty()) {
      throw new RuntimeException("Fila vazia!");
    }
    int element = elements[start];
    start++;
    return element;
  }

  public int peek() {
    if (isEmpty()) {
      throw new RuntimeException("Fila vazia!");
    }
    return elements[start];
  }

}
