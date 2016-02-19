exports.get = (request, response) => response.render({
	intro: {
		en: `
Nihongo Center is a **Japanese school** located in the heart of Kyoto.
With over 30 years of experience teaching the Japanese language,
we have established ourselves with our unique teaching methods as well as the talent
and ability of our experienced instructors.

* 1
* 2
* 3

We have a very diverse student population at our school,
with a good majority of students from western countries.
Our JLPT-based curriculum helps ensure a high pass-rate for any level of the test.
In addition, we help students grow and develop their self-expression and communication skills
through project work, class discussions, etc.

Because of our rich and varied curriculum,
many of our students have been able to pass the entrance exams needed to continue
on to universities throughout Japan without any worries about language barriers.`,
		ja: `
日本語センターは京都の中心、四条河原町にあって、通学に便利な日本語学校です。
日本語教育をはじめて三十数年。能力、経験を併せ持った若手の教育スタッフによる独特の教え方で定評があります。

クラスは国際色が本当に豊か！欧米系の学生が多いことでも有名です。日本語能力検定試験（JLPT）を重視したカリキュラムで、
どのレベルも高い合格率を誇っています。またプロジェクトワーク等、
日本語による自己表現能力育成に着目した教育プログラムが充実している点も見逃せない特徴です。
これらは大学、大学院入試の合格率にも大きく反映されています。`,
		fr: `
Notre école est située en plein cœur du centre-ville de Kyôto,
au carrefour Shijo Kawaramachi. Elle se trouve dans un secteur extrêmement bien
desservi par les transports en commun, ce qui la rend très facile d’accès depuis
n’importe quel endroit de Kyôto. Nihongo Center existe depuis plus de 30 ans et
est spécialisé dans l’enseignement du japonais aux étrangers. Cette longue
existence est le résultat de la qualité des formations que nous proposons,
la présence d’un corps enseignant jeune mais expérimenté et grâce à l’utilisation
par ces derniers de nos méthodes d’enseignement uniques.

De plus, contrairement à la plupart des autres écoles qui privilégient les étudiants asiatiques,
notre école est également connue pour avoir un grand nombre d’étudiants occidentaux
tout au long de l’année. Nous prêtons également une attention particulière aux connaissances
nécessaires pour le Test d’Aptitude au Japonais (JLPT) ; notre école est fière d’afficher
un taux de réussite élevé à ce test et ce quel que soit le niveau tenté par les étudiants.
Une autre particularité est l’importance que nous accordons aux compétences
communicatives afin de donner à chaque étudiant une grande autonomie en japonais.
Grâce au contenu de nos formations, nous nous assurons de la capacité de nos étudiants à
savoir s’exprimer dans les situations les plus diverses. La qualité de notre enseignement
et le succès de notre école est aussi visible par le grand nombre de nos élèves qui
poursuivent leurs études à l’université ou dans des écoles postuniversitaires.`
	}
})