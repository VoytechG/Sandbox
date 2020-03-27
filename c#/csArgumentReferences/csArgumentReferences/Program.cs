using System;

namespace csArgumentReferences
{
  class Program
  {
    static void shallowCopyTest(string str)
    {
      str += "World!";
    }

    static void refTest(ref string str)
    {
      str += "World!";
    }

    static void outTest(out string str)
    {
      str = new string("Hello World!");
    }

    static void Main(string[] args)
    {
      string sCopyTestStr = "Hello ";
      shallowCopyTest(sCopyTestStr);
      Console.WriteLine(sCopyTestStr);

      string refTestStr = "Hello ";
      refTest(ref refTestStr);
      Console.WriteLine(refTestStr);

      string outTestStr;
      outTest(out outTestStr);
      Console.WriteLine(outTestStr);
    }
  }
}

