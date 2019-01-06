//INFO: leer y contar palabras en java (lo que compile con menos conceptos)

import java.nio.file.*;
import java.util.Arrays;
import java.util.stream.Stream;
import java.util.stream.Collectors;

class LeerYContarPalabras {
	public static void main(String args[]) throws Exception {

	  byte[] encoded = Files.readAllBytes(Paths.get("texto.txt"));
 		String src= new String(encoded, "utf-8");
		String[] words= src.split("[^a-zA-Z0-9]+");
		System.out.println("tiene "+words.length);
		
		Stream<String> st= Arrays.stream(words);
		String wordsOut= st.map( x -> ("{" + x +"}"))
												.collect( Collectors.joining(","));	


		System.out.println("Son "+wordsOut);
	}
}
