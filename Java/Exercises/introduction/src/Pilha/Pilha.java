package Pilha;

public class Pilha {
  private int[] elements;
  private int top;

  public Pilha(int Length) {
    elements = new int[Length];
    top = -1;
  }

  public void push(int elemento) {
    if (top == elements.length - 1) {
      throw new RuntimeException("Pilha cheia!");
    }
    top++;
    elements[top] = elemento;
  }

  public int pop() {
    if (top == -1) {
      throw new RuntimeException("Pilha vazia!");
    }
    int elemento = elements[top];
    top--;
    return elemento;
  }

  public int peek() {
    if (top == -1) {
      throw new RuntimeException("Pilha vazia!");
    }
    return elements[top];
  }

  public boolean isEmpty() {
    return top == -1;
  }

}