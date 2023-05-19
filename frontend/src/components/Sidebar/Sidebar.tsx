import {
  Bars3Icon,
  HomeIcon,
  ListBulletIcon,
  PlusCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import defaultTWCss from '../../styles/theme';
import logoImg from '../../assets/favicon.svg';
import { useState } from 'react';
import { ItemsGroupTitle, MItem } from './SbItems';

type Props = {
  children?: React.ReactNode;
};

const Sidebar: React.FC<Props> = () => {
  const { icons, bgColordefault } = defaultTWCss;
  const [selected, setSelected] = useState<string>('Página inicial');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <aside
      className={
        bgColordefault +
        ` overflow-y-auto dark:text-neutral-200 w-${
          collapsed ? 12 : 60
        } h-auto block border-r border-neutral-200
           px-${collapsed ? 2 : 4}`
      }
    >
      {collapsed && (
        <div className="flex py-3 justify-center">
          <button
            className="mb-3 flex justify-center"
            onClick={() => {
              handleCollapse();
            }}
          >
            <Bars3Icon className={icons} />
          </button>
        </div>
      )}
      {!collapsed && (
        <button
          className="w-full mb-3 p-3 flex justify-between"
          onClick={() => {
            handleCollapse();
          }}
        >
          ADMINS
          <XMarkIcon className={icons} />
        </button>
      )}
      {!collapsed && (
        <div className="flex-1 items-center mb-12">
          <img
            className="mx-auto h-28 w-auto"
            src={logoImg}
            alt="Your Company"
          />
          <h2 className="text-center text-lg">Engenharia de concursos</h2>
          <h3 className="text-center text-emerald-600">Simulador de provas</h3>
        </div>
      )}
      <menu>
        <MItem
          title="Página inicial"
          to="/"
          collapsed={collapsed}
          icon={<HomeIcon className={icons} />}
          selected={selected}
          setSelected={setSelected}
        />
        <ItemsGroupTitle>dados </ItemsGroupTitle>
        <MItem
          to="/questionslist"
          title="Listar questões"
          icon={<ListBulletIcon className={icons} />}
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <MItem
          to="#"
          title="Adicionar questões"
          icon={<SquaresPlusIcon className={icons} />}
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <ItemsGroupTitle>sobre </ItemsGroupTitle>
        <MItem
          to="#"
          title="Sobre nós"
          icon={<PlusCircleIcon className={icons} />}
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
      </menu>
    </aside>
  );
};

export default Sidebar;
