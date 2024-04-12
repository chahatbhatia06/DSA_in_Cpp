#include<iostream>
using namespace std;
	

int main() {
    // Write your code here
   char ch;
    cin >> ch;
    // Character is an uppercase alphabet
    if (ch >= 'A' && ch <= 'Z') {
        cout << "1" << endl;
    }
    // Character is a lowercase alphabet
    else if (ch >= 'a' && ch <= 'z') {
        cout << "0" << endl;
    }
    // Character is neither uppercase nor lowercase alphabet
    else {
        cout << "-1" << endl;
    }
    return 0;
  }