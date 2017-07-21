package ufc.example.demo.author;


import ufc.example.demo.author.Author;

import java.util.ArrayList;

/**
 * Created by Supervisor on 17/07/2017.
 */
public class InMemoryAuthorRepository {
}




    private static final List<Author> AUTHORS = new ArrayList<>();

static {
        AUTHORS.addall(Arrays.asList(
        new Author(id:1, firstName:"Glauco", lastName:"Aquino"),
        new Author(id:2, firstName:"Felipe", lastName:"Pinheiro"),
        new Author(id:3, firstName:"Machado", lastNAme:"de Assis")
        ));
        }
@Override
public Iterable<Author> finfAll(){
    return Collections.unmofiableList(AUTHORS);
        }

@Override
public void save(Author author) {
    AUTHORS.add(author);
        }



