import {
  CommitIcon,
  EyeOpenIcon,
  RadiobuttonIcon,
  Share1Icon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import { formatDistance } from "date-fns";

export interface IRepoCard {
  name: string;
  description: string;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
  watchersCount: number;
  htmlUrl?: string;
  owner: {
    login: string;
    id: number;
    nodeId: string;
    avatarUrl: string;
    gravatarId: string;
    url: string;
    htmlUrl: string;
    type: string;
  };
  defaultBranch?: string;
  openIssues?: number;
}

const RepoCard = (props: IRepoCard) => {
  return (
    <div className="bg-slate-800 rounded-lg mb-4 p-4">
      <div className="flex items-center justify-between">
        <Link
          className="h3 text-white font-bold tracking-wide text-lg"
          to={props.htmlUrl || `/repo/${props.owner.login}/${props.name}`}
          target={props.htmlUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {props.name}
        </Link>

        {Boolean(props.defaultBranch) && (
          <div className="flex items-center">
            <CommitIcon />
            <p className="pl-4 text-white">{props.defaultBranch}</p>
          </div>
        )}
      </div>

      <div className="flex items-center mb-4">
        <div className="flex items-center" title="Starred by">
          <StarIcon />
          <span className="pl-2">{props.stargazersCount}</span>
        </div>
        <div className="flex items-center ml-4" title="Watched By">
          <EyeOpenIcon />
          <span className="pl-2">{props.watchersCount}</span>
        </div>
        <div className="flex items-center ml-4" title="Forked By">
          <Share1Icon className="-rotate-45" />
          <span className="pl-2">{props.forksCount}</span>
        </div>
        {Boolean(props.openIssues) && (
          <div className="flex items-center ml-4" title="Open Issues">
            <RadiobuttonIcon />
            <span className="pl-2">{props.openIssues}</span>
          </div>
        )}
      </div>
      <p className="text-slate-300 mb-2">{props.description}</p>
      <div className="flex items-center justify-between">
        <figcaption className="flex items-center space-x-4">
          <img
            src={`${props.owner.avatarUrl}`}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
            loading="lazy"
          />
          <div className="">
            <div className="text-base font-semibold text-slate-300">
              <a
                href={`${props.owner.htmlUrl}`}
                tabIndex={-1}
                target="_blank"
                rel="noreferrer"
              >
                {props.owner.login}
              </a>
            </div>
            <div className="">{props.owner.type}</div>
          </div>
        </figcaption>
        <p className="ml-3 whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700">
          {formatDistance(new Date(props.updatedAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default RepoCard;
