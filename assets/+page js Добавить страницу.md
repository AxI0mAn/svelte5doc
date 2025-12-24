Чтоб добавить ещё одну страницу в проект:
1. Создать в /routes папку с именем новой страницы /newTest
2. Внутри /newTest создать два файла: +page.js и +page.svelte
3. +page.svelte должен начинаться с 
    <svelte:head>
	    <title>newTest</title>
	    <meta name="description" content="test new page create" />
    </svelte:head>
4. +page.js 
5. Добавить ссылки на эту страницу, например в header
    <li aria-current={page.url.pathname.startsWith('/newTest') ? 'page' : undefined}>
		<a href="/newTest">newTest</a>
	</li>
Обрати внимание, что состояние для URL прописано в двух местах:
aria-current={page.url.pathname.startsWith('/newTest') и <a href="/newTest">
