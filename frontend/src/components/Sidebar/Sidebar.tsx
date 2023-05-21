import {
  Bars3Icon,
  HomeIcon,
  ListBulletIcon,
  PlusCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import defaultTWCss from '../../styles/theme';
import { useEffect, useState } from 'react';
import { ItemsGroupTitle, MItem } from './SbItems';

type Props = {
  children?: React.ReactNode;
};

const Sidebar: React.FC<Props> = () => {
  const location = window.location.pathname;
  const { icons, bgGradient } = defaultTWCss;
  const [selected, setSelected] = useState<string>('Página inicial');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleLocation = () => {
    setSelected(location);
  };

  useEffect(() => {
    handleLocation();
  }, [location]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <aside
      className={
        bgGradient +
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
          className="w-full mb-3 p-3 flex justify-between text-blue-100"
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
            className="mx-auto h-14 w-auto"
            //src={logoImg}
            src="/logoLicitarNegativo.png"
            alt="Your Company"
          />
          <h2 className="text-center  text-blue-100 text-lg">
            Processo de seleção
          </h2>
          <h3 className="text-center text-blue-100">2023</h3>
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

        {!collapsed && <ItemsGroupTitle>licitações </ItemsGroupTitle>}
        <MItem
          to="/bidding"
          title="Licitação 1"
          icon={<ListBulletIcon className={icons} />}
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <MItem
          to="/underConstruction"
          title="Nova licitação"
          icon={<SquaresPlusIcon className={icons} />}
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
        <MItem
          to="/underConstruction"
          title="Histórico"
          icon={<SquaresPlusIcon className={icons} />}
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
        {!collapsed && <ItemsGroupTitle>sobre </ItemsGroupTitle>}
        <MItem
          to="/underConstruction"
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
