<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Kip Fadel',
      tel: '(050) 549-2350 x58395',
      address: '4243 Eve Drive',
      opening_hours: '08:00',
      description:
        'Dignissimos amet nobis blanditiis exercitationem deleniti ipsum ullam voluptates et. Dolorem labore qui et voluptas voluptate harum voluptates. Molestiae saepe nam officiis illo. Dolores est sed mollitia aperiam sed est. Eaque sed dignissimos sint eos.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.962483156034175',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 2,
      name: 'Korey Mohr',
      tel: '895-870-8172 x87682',
      address: '1430 Konopelski Shoals',
      opening_hours: '08:00',
      description:
        'Porro natus neque quam dolor id iusto omnis eaque cum. Laboriosam qui aspernatur repudiandae sed qui. Consequatur possimus quia sed sit.\n \rSimilique voluptatem nisi et voluptates placeat voluptatem vero voluptatem. Amet et voluptas quae tempore numquam. Officia rerum similique.\n \rItaque fugiat repudiandae sed tempore ea autem quia. Dolor dolorem voluptas debitis veniam occaecati natus est deserunt vitae. Non labore sed illo commodi ut iusto suscipit. Magni laudantium labore qui est aliquam quia necessitatibus.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=78.99861989518119',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 3,
      name: 'Jaylan Hamill',
      tel: '1-150-123-7572',
      address: '8244 Schoen Groves',
      opening_hours: '08:00',
      description:
        'Officiis eum libero mollitia quisquam dolorem placeat voluptas. Minus nulla non earum nulla et soluta. Velit animi ullam inventore quidem vel. Dolore dolorem ratione ea non aperiam.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=27.225975438796567',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 4,
      name: 'Damaris Stiedemann',
      tel: '628-147-9058',
      address: '4934 Lebsack Crossroad',
      opening_hours: '08:00',
      description:
        'A exercitationem blanditiis. Dicta dicta quidem praesentium sapiente. Vitae impedit quisquam dignissimos eum eaque laboriosam atque eveniet voluptatum.\n \rExplicabo aut accusantium consequatur sunt magni voluptas quas. Voluptas voluptatibus voluptatem itaque dolorem vero hic quam. Sed delectus id et repellat autem vel fuga. Est molestias voluptatem. Omnis qui qui tenetur. Et illo dolores eos aut.\n \rEt rerum corrupti dignissimos repellat placeat temporibus voluptas dolores. Corrupti ut voluptatibus. Hic velit at sit sint qui odit ullam expedita ut.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=5.575195283132661',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 5,
      name: 'Dallas Runte',
      tel: '965.163.3132 x462',
      address: '3084 Narciso Throughway',
      opening_hours: '08:00',
      description: 'architecto',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=75.28958925641238',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 6,
      name: 'Rosalia Russel',
      tel: '(707) 941-9991 x2928',
      address: '2355 Britney Cliffs',
      opening_hours: '08:00',
      description: 'Harum quia reprehenderit.\nAt voluptatibus dolor.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.84344262598326',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 7,
      name: 'Dr. Keeley Gleichner',
      tel: '1-060-297-0483',
      address: '82588 Adela Junctions',
      opening_hours: '08:00',
      description:
        'Dolorem est sed error hic. Distinctio consequuntur sunt optio ipsam illo facilis aliquid omnis recusandae. Quo quidem velit alias molestias quod qui voluptatem et. Expedita ducimus vero facere culpa et asperiores et.\n \rEius aut facere qui adipisci eum aut rerum in. Impedit voluptatum voluptate dolore maxime quo. Suscipit exercitationem cupiditate sunt. Pariatur eos inventore voluptates debitis amet. Omnis libero illum. Voluptas ea rerum aut voluptate voluptas quasi voluptatem maiores laudantium.\n \rVoluptate quod repellendus voluptas sit voluptas libero sint quod. Velit ad assumenda saepe ipsa. Suscipit id sunt voluptates tempora inventore est aut nihil. Aut alias eum hic sed.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=89.05119526711478',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 8,
      name: 'Arianna Hamill',
      tel: '279-024-6014 x3901',
      address: '0749 Ethan Manor',
      opening_hours: '08:00',
      description: 'consequatur qui nihil',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.9473097332517',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 9,
      name: 'Sim Beer',
      tel: '(856) 467-7087 x7081',
      address: '766 Fahey Heights',
      opening_hours: '08:00',
      description: 'Quae ut aut veritatis ad nostrum voluptate id est harum.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=40.289205627388554',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 10,
      name: 'Nola Parker III',
      tel: '802-604-5153',
      address: '030 Jasen Mountains',
      opening_hours: '08:00',
      description:
        'Quos sunt vel eos est vero officia dolore ut. Ipsam reprehenderit occaecati sunt aperiam. Fugiat non et.\n \rVoluptatem animi ut aperiam quia animi perferendis alias facere quas. Dolorem incidunt vitae adipisci facere est eveniet. Vitae cupiditate nihil voluptatem minima ex minus quia. Et minus corporis aut debitis sed id at. Ut dolor qui eos consequatur rerum sunt aut saepe. Consequatur sit tempora porro nulla autem.\n \rQuidem ut nemo suscipit. Illum voluptatem minus vitae ea voluptatibus doloremque accusantium nulla. Non eos perferendis saepe et corrupti sunt.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=10.182982185836309',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 11,
      name: 'Miss Alphonso Farrell',
      tel: '675.472.1319 x19928',
      address: '734 Cruickshank Turnpike',
      opening_hours: '08:00',
      description: 'Eum odio ea rem aliquam vitae possimus.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=48.78815698446659',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 12,
      name: 'Graham Johnson',
      tel: '037-360-3656 x4679',
      address: '105 Wolf Union',
      opening_hours: '08:00',
      description: 'ipsa repudiandae cumque',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=66.41956167134741',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 13,
      name: 'Greg Mueller',
      tel: '(028) 736-5547 x8015',
      address: '27494 Tanya Villages',
      opening_hours: '08:00',
      description:
        'Assumenda id voluptas possimus fugiat delectus expedita accusamus nihil pariatur. Esse est laborum. Unde neque aut in corrupti velit optio consequatur. Autem delectus quia. Quia cum aperiam.\n \rAut maiores atque. Commodi minima ut iste nisi iste suscipit magni itaque id. Odit quia quisquam aut. Reiciendis autem nostrum ipsam. Eum voluptas eveniet doloremque dolore tenetur cupiditate. Vitae consectetur porro nihil perferendis perferendis maiores voluptatem.\n \rQuia odit et repellat error blanditiis debitis saepe necessitatibus id. Voluptatum sit eum natus beatae ut. Recusandae quaerat laboriosam ea saepe voluptatem deleniti. Eum expedita adipisci quo rem.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=4.352922608116727',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 14,
      name: 'Rylan Collins',
      tel: '146-772-1634',
      address: '452 Dewitt Ranch',
      opening_hours: '08:00',
      description:
        'Hic qui tempora et inventore neque similique enim. Quae accusamus distinctio nam voluptas distinctio occaecati. Ea illo in nesciunt alias rerum est eius voluptatibus. Iusto cum dolorem. Tempore consequuntur modi. Necessitatibus pariatur et voluptatem similique.\n \rItaque laborum repellat quod veritatis et. Debitis placeat ipsum et est. Architecto fuga sint voluptas enim officiis.\n \rEos itaque qui maiores aut itaque reiciendis ex quo voluptas. Pariatur autem porro. In et quas modi. Sunt ab earum saepe quae nostrum eos et quasi odit. Voluptas veritatis rerum eos eius sequi eum dicta esse quisquam. Quia eius recusandae exercitationem quia et voluptatem doloribus et.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=68.13112301786232',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 15,
      name: 'Keenan Kuvalis IV',
      tel: '386-585-3964 x3830',
      address: '468 Heidenreich Station',
      opening_hours: '08:00',
      description:
        'Ullam qui nostrum quia reiciendis explicabo.\nOdit doloribus provident.\nA at dicta numquam et ad accusantium officiis est nulla.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=11.790506723694438',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 16,
      name: 'Reggie Blanda',
      tel: '(204) 675-0115 x338',
      address: '1456 Odell Forest',
      opening_hours: '08:00',
      description: 'Cum voluptates sequi rem.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=69.42868974402461',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 17,
      name: 'Aida Nienow I',
      tel: '1-972-862-9165',
      address: '5254 Heidi Spring',
      opening_hours: '08:00',
      description:
        'Officiis expedita rerum eum necessitatibus eaque ipsam in consequatur.\nEsse autem aut quaerat.\nSed sed sed cumque.\nPlaceat quia dolor.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=28.737271712592104',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 18,
      name: 'Carmine Thiel',
      tel: '(004) 422-4489 x640',
      address: '38447 Blanda Mill',
      opening_hours: '08:00',
      description: 'et',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=18.337791844810482',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 19,
      name: 'Alicia Pollich',
      tel: '941-468-4094 x5897',
      address: '383 Breitenberg Mill',
      opening_hours: '08:00',
      description: 'quasi',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=42.263224546267985',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 20,
      name: 'Prince Waters',
      tel: '118.639.9986 x8034',
      address: '20386 Wade Track',
      opening_hours: '08:00',
      description:
        'Atque repellat laudantium esse quo quos. Velit blanditiis explicabo error. Magnam in temporibus laborum ea. Ut corporis atque. Rerum omnis reiciendis libero quia quia praesentium id est qui.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=96.27742765207013',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 21,
      name: 'Luz Durgan',
      tel: '1-424-669-9686',
      address: '2394 Stoltenberg Ridge',
      opening_hours: '08:00',
      description: 'aut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=72.43189930852208',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 22,
      name: 'Maude Breitenberg',
      tel: '645-305-6730',
      address: '635 Rohan Highway',
      opening_hours: '08:00',
      description:
        'Mollitia consequatur vero vel. Et iure repellendus dolor ut. Nostrum necessitatibus suscipit possimus. Laborum numquam voluptatum sed incidunt ut. Quis repellendus praesentium corrupti non. Sequi occaecati non iusto.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=40.97447549269937',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 23,
      name: 'Delia Franecki',
      tel: '1-693-809-8793 x89910',
      address: '35500 Kilback Wells',
      opening_hours: '08:00',
      description:
        'Dignissimos sint nihil dolor veniam ipsam sunt sed est. Nemo quia tenetur. Libero officia dolorem. Nobis praesentium sint suscipit ipsam debitis. Voluptates illum nihil porro. Aut praesentium qui ratione necessitatibus et quae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=8.634516658455027',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 24,
      name: 'Miss Leonard Adams',
      tel: '217-015-7282',
      address: '57589 Waelchi Avenue',
      opening_hours: '08:00',
      description:
        'Modi quis ut amet. Ab magni et. Voluptate aut dolorum vitae qui veniam dolorum est ea.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.35973092911149',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 25,
      name: 'Abdullah Muller III',
      tel: '1-105-028-0427 x768',
      address: '0531 Leannon Cape',
      opening_hours: '08:00',
      description:
        'Eius praesentium autem repudiandae quia aut dolorum. Saepe eveniet iusto suscipit nam molestiae ea. Eveniet adipisci et at enim. Consequuntur explicabo minus ut esse consequatur voluptatem officiis molestias. Perferendis quia minus cum numquam perferendis eum. Esse ut sed inventore perferendis repudiandae consequatur tempore maiores.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=65.77828715104694',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 26,
      name: 'Miss Arch Pacocha',
      tel: '(605) 769-3549',
      address: '3106 Clyde Fords',
      opening_hours: '08:00',
      description: 'harum est possimus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=70.81122330219345',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 27,
      name: 'Cassandre Leuschke',
      tel: '1-804-877-5756 x478',
      address: '3616 Trace Mill',
      opening_hours: '08:00',
      description: 'eligendi',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=76.14445566560575',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 28,
      name: 'Lon Dach',
      tel: '(240) 688-6355 x43831',
      address: '3203 Carmelo Radial',
      opening_hours: '08:00',
      description:
        'Velit ea corrupti voluptate laboriosam ad aut pariatur voluptas. Facere ut iure eveniet natus mollitia tempore. Asperiores quasi suscipit unde nesciunt dolorem iusto.\n \rVel numquam id in est sequi. Minus totam maxime dolore esse nemo voluptas hic nulla. Nulla consequatur vitae velit nisi enim odio nostrum. Ipsam accusamus ut. Tempore voluptatem quisquam qui iste quaerat minima earum quibusdam.\n \rQui ipsum nulla ut perspiciatis omnis eveniet. Porro possimus mollitia sed natus dolores omnis natus sed aliquam. Suscipit iusto amet esse incidunt aut cupiditate. Voluptatem dolor sit distinctio doloremque occaecati voluptatem molestiae voluptatem. Consequatur molestiae dolorem incidunt quia odio repudiandae ut voluptas.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=37.06061572049892',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 29,
      name: 'Keaton Wilderman',
      tel: '1-965-120-6762',
      address: '962 Holly Dale',
      opening_hours: '08:00',
      description:
        'Officia est libero exercitationem dignissimos in. Quam tenetur beatae quam voluptatem occaecati ab. Consectetur quisquam ipsum. Maxime ullam delectus ea. Nesciunt porro eaque fugiat in vel.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=81.641743863892',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 30,
      name: 'Torey Trantow',
      tel: '1-308-816-1202',
      address: '1202 Soledad Gardens',
      opening_hours: '08:00',
      description: 'Maiores velit autem dolores sit.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=37.79070327077891',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 31,
      name: 'Luna Pfannerstill III',
      tel: '537.887.8058',
      address: '801 Veum Prairie',
      opening_hours: '08:00',
      description: 'quos',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=42.79818346748281',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 32,
      name: 'Baron Corkery',
      tel: '(576) 682-0846',
      address: '416 Derek Village',
      opening_hours: '08:00',
      description:
        'Rerum voluptate consequuntur quo. Voluptatibus rerum enim et. Quibusdam illum expedita suscipit iste aliquid soluta. Aut amet id maxime cumque quos soluta modi qui qui. Eaque quia quam. Occaecati accusantium dolor illo velit explicabo debitis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=75.62984746831263',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 33,
      name: 'Gaylord Spencer',
      tel: '975-847-3950',
      address: '62708 Hortense Turnpike',
      opening_hours: '08:00',
      description: 'Corporis et earum.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=56.417656420070706',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 34,
      name: 'Alexzander Mohr DDS',
      tel: '1-584-615-5640 x68315',
      address: '274 Mayert Mountains',
      opening_hours: '08:00',
      description:
        'Aut sunt omnis ut. Ratione quidem suscipit amet sapiente. Sed illum et sed placeat fugiat cum repudiandae quas. Neque accusantium alias autem quae amet.\n \rPerferendis id dolorem non odio. Reiciendis earum ab a autem. Nam et rerum id magnam ad. Officiis est ea expedita minus ut. Aliquam corrupti officia blanditiis.\n \rDolore optio fugit quas. Sapiente et et non eius voluptatum. Earum molestias non expedita voluptate. Natus nemo velit explicabo consequatur. Libero et nemo occaecati repellat eum et.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.94495278575397',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 35,
      name: 'Rodolfo Lindgren',
      tel: '(678) 737-2217 x849',
      address: '1791 Cooper Squares',
      opening_hours: '08:00',
      description: 'sapiente officiis quis',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=43.11818631783198',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 36,
      name: 'Ernesto Howell MD',
      tel: '1-567-824-9605 x2797',
      address: '068 Olson Trace',
      opening_hours: '08:00',
      description: 'animi dolorum sit',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=0.6914449845200288',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 37,
      name: 'Nyasia Emmerich',
      tel: '029-103-2445',
      address: '94439 Miller Rapids',
      opening_hours: '08:00',
      description:
        'Deserunt quae ut omnis sit officiis recusandae tenetur quos et. Molestiae omnis tempora nam a ea. Et reiciendis similique neque veritatis beatae architecto.\n \rDebitis eius hic voluptas dignissimos eligendi. Labore delectus aut omnis alias. Distinctio rerum itaque id voluptatum. Et eos rerum unde eveniet totam ut. Quia fugiat quia qui quia sunt et iure nisi natus. Dignissimos dignissimos fugit.\n \rNon rerum deleniti. Est eligendi nam temporibus cupiditate. Eos ratione optio a sunt ut odio dolor ipsam sed. Quam dicta debitis soluta mollitia assumenda. Et fuga ut est eius est sit et distinctio veritatis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=59.831635638081046',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 38,
      name: 'Cletus Cassin',
      tel: '1-974-752-8443',
      address: '4798 Weimann Passage',
      opening_hours: '08:00',
      description:
        'Sapiente libero dicta aut. Molestias iusto possimus quod maxime porro. Excepturi ut odio animi in.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=36.290407531912216',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 39,
      name: 'Abigayle Cummerata',
      tel: '(582) 546-2292',
      address: '45655 Lowe Cape',
      opening_hours: '08:00',
      description: 'fuga aperiam assumenda',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=25.99442445023028',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 40,
      name: 'Lacy Connelly',
      tel: '1-762-300-4461',
      address: '727 Madelyn Turnpike',
      opening_hours: '08:00',
      description: 'et corrupti architecto',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=0.8246837850972577',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 41,
      name: 'Ceasar Hackett',
      tel: '124-152-2410 x216',
      address: '135 Heidenreich Parks',
      opening_hours: '08:00',
      description:
        'Veniam est quo laudantium perferendis voluptatem dolor explicabo id quasi. Nihil magni ratione eum error est suscipit aut culpa et. Quo voluptates assumenda est.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=73.84270749465081',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 42,
      name: 'Bertrand Pollich',
      tel: '079.088.4576',
      address: '3566 Lorenza Forges',
      opening_hours: '08:00',
      description: 'velit',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=63.00004019470591',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 43,
      name: 'Louvenia Langosh',
      tel: '625.397.1255',
      address: '74313 Litzy Highway',
      opening_hours: '08:00',
      description: 'possimus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=34.080334252177735',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 44,
      name: 'Ivy Rau',
      tel: '(476) 990-3301 x379',
      address: '9636 Camron Lodge',
      opening_hours: '08:00',
      description:
        'Sequi tempore sit.\nQuam sed incidunt quo.\nIn veritatis accusantium id.\nNon ratione sit praesentium excepturi qui repudiandae.\nVoluptas aperiam excepturi vel ipsam facere dolorem vero et.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=58.93797171216866',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 45,
      name: 'Mia McClure',
      tel: '(653) 912-3604',
      address: '7011 Mattie Spur',
      opening_hours: '08:00',
      description:
        'Rem perferendis expedita tempore laborum. Voluptas amet eius assumenda nesciunt. Velit tempore accusamus aut omnis magnam et ex sed provident. Natus ea perferendis dicta laudantium et. Et voluptates qui eligendi laborum assumenda debitis dolor.\n \rSaepe nihil dolorem exercitationem maiores ipsum. Porro ullam aut maiores vel dolorum velit perferendis exercitationem sequi. Animi aut quibusdam. Ipsam accusamus architecto modi saepe sequi et dignissimos est. Esse adipisci iste.\n \rSuscipit culpa eius enim voluptas et veniam necessitatibus ab aut. Officia itaque voluptas veniam dignissimos. Voluptatum officia fugiat asperiores et perspiciatis provident non aspernatur. Aut eius vero autem aut.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=47.490709321839894',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 46,
      name: 'Estella Kerluke',
      tel: '019-905-5277 x557',
      address: '27824 Malachi Tunnel',
      opening_hours: '08:00',
      description: 'distinctio',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=26.932849900804644',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 47,
      name: 'Lucy Osinski',
      tel: '924-876-6350',
      address: '29609 Klein Flat',
      opening_hours: '08:00',
      description: 'consectetur',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=22.092318112553567',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 48,
      name: 'Mitchell Ratke',
      tel: '768.798.8795 x0551',
      address: '7639 Keebler Bridge',
      opening_hours: '08:00',
      description:
        'Maxime aperiam dicta eaque et beatae.\nQuos et quo neque vel eius eos dicta.\nDolor vel at et repellendus architecto illo illo nobis animi.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=98.8236779980993',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 49,
      name: 'Emory Grady PhD',
      tel: '1-759-047-3423 x3238',
      address: '940 Fahey Corner',
      opening_hours: '08:00',
      description: 'molestiae',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=82.48999336737828',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
    {
      id: 50,
      name: 'Dr. Buddy Bode',
      tel: '462.762.0280',
      address: '325 Schamberger Park',
      opening_hours: '08:00',
      description:
        'Dolor est incidunt quo.\nPossimus voluptas aliquam qui exercitationem doloremque illo sit placeat.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=93.1208181231111',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
    },
  ],
}

export default {
  data() {
    return {
      restaurants: [],
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      )
    },
  },
}
</script>
