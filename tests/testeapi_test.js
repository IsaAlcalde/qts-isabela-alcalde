import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano', 'Alan']

Deno.test("Teste de assertions (AP)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
})

Deno.test("Teste de assertions (API)", () => {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "Alan"],
        "Opa! Algo deu errado!");
})