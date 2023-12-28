import getTopInteractedTags from "@/lib/actions/tag.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  user: {
    _id: string;
    clerkId: string;
    name: string;
    username: string;
    picture: string;
  };
}

async function UserCard({ user }: props) {
  const interactedTags = await getTopInteractedTags({ userId: user._id });
  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={user.picture}
          width={100}
          height={100}
          alt="user avatar"
          className="rounded-full"
        ></Image>
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            @{user.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">{user.name}</p>
        </div>
      </article>
    </Link>
  );
}

export default UserCard;