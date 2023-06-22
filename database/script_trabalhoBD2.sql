-- Criando tabelas e adicionandos suas constraints

create table projeto_vencedor (
	id_projeto uuid not null,
	id_categoria uuid not null
);

alter table projeto_vencedor 
	add constraint PK_PROJETO_VENCEDOR 
	primary key (id_categoria);

alter table projeto_vencedor 
	add constraint FK_PROJETO_TABELA_PROJETO_VENCEDOR 
	foreign key (id_projeto) references projeto (id);

alter table projeto_vencedor 
	add constraint FK_CATEGORIA_TABELA_PROJETO_VENCEDOR 
	foreign key (id_categoria) references categoria (id);

-- Criando procedure e trigger para gerenciamento de projeto vencedor


create or replace function atribui_vencedor() returns trigger as $$
	declare novo_id_projeto uuid;
	declare verifica_existencia integer;
	begin
		select count(*) into verifica_existencia from projeto_vencedor pv where pv.id_categoria = new.id_categoria;
	
		if verifica_existencia = 1 then
			select p.id into novo_id_projeto from projeto p where id_categoria = new.id_categoria order by votos desc;
		
			update projeto_vencedor pv set id_projeto = novo_id_projeto where pv.id_categoria = new.id_categoria;
		else
			insert into projeto_vencedor values (new.id, new.id_categoria);
		end if;
	
		return new;
	end;
$$ language plpgsql;

drop trigger if exists atualiza_vencedor on public.projeto;

create trigger atualiza_vencedor 
	after update of votos on public.projeto 
	for each row 
	execute procedure atribui_vencedor();

-- selects

select p.nome_projeto,p.votos , pv.id_projeto, pv.id_categoria 
	from projeto_vencedor pv inner join projeto p 
	on p.id = pv.id_projeto

select r.nome_responsavel, r.sobrenome_responsavel, tr.telefone 
	from responsavel r inner join telefone_responsavel tr 
	on r.id = tr.id_responsavel

select * from professor;

select * from categoria;

select * from projeto;

select * from aluno;

select * from responsavel;

select * from responsavel_aluno;

select * from telefone_responsavel;

select * from apresentacao;

-- deletes

delete from projeto;

delete from aluno;

delete from responsavel;

delete from responsavel_aluno;

delete from telefone_responsavel;

delete from projeto_vencedor;

-- drops

drop table aluno cascade;

drop table apresentacao cascade;

drop table categoria cascade;

drop table professor cascade;

drop table projeto cascade;

drop table responsavel cascade;

drop table responsavel_aluno cascade;

drop table telefone_responsavel cascade;

drop table projeto_vencedor cascade;
