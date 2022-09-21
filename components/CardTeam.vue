<script>
export default {
  props: {
    teamName: String,
    teamJob: String,
    teamImage: String,
    teamEmail: String,
    teamSlug: String,
  },
};
</script>
<template>
  <div class="p-0 content-team align-items-center d-flex flex-column">
    <a :href="`/team/${teamSlug}`" class="text-center">
      <img :src="teamImage" alt="" class="object-cover rounded-circle" />
      <h4 class="text-medium text-center team-name">{{ teamName }}</h4>
      <p class="text-small text-center designation">{{ teamJob }}</p>
    </a>
  </div>
</template>
<style>
h4.team-name{
line-height: 26px;
}
p.designation{
  line-height: 24px;
}
.container-team {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(20% - 20px), 1fr));
  grid-gap: 20px;
  gap: 20px;
}
.content-team {
  margin-bottom: 20px;
}
.content-team img {
  width: 180px;
  height: 180px;
  object-position: top;
}
.content-team a,
.content-team h4,
.content-team p {
  color: var(--color--secondary);
}
.content-team h4,
.content-team p {
  max-width: 223px;
}
.content-team a:hover {
  text-decoration: none;
}
.content-team h4 {
  margin-top: 10px;
  font-weight: 600;
}
@media (min-width: 1240px) {
  .container-team {
    grid-template-columns: repeat(auto-fill, minmax(calc(20% - 20px), 1fr));
    grid-gap: 20px;
    gap: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1239px) {
  .container-team {
    grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
    grid-gap: 20px;
    gap: 20px;
  }
}
@media (min-width: 540px) and (max-width: 767px) {
  .container-team {
    grid-template-columns: repeat(auto-fill, minmax(calc(50% - 20px), 1fr));
    grid-gap: 20px;
    gap: 20px;
  }
}
@media (max-width: 539px) {
  .container-team {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-gap: 0;
    gap: 0;
  }
}
@media (max-width: 900px) {
  .text-team {
    width: 100% !important;
  }
}
</style>
