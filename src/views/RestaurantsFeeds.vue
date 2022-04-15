<template>
  <div class="container py-5">
    <Navbar />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import NewestRestaurants from '../components/NewestRestaurants'
import NewestComments from '../components/NewestComments'

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
  ],
  comments: [
    {
      id: 1,
      text: 'Sit error distinctio.',
      UserId: 2,
      RestaurantId: 1,
      createdAt: '2022-02-14T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ksqCnkzIO9N9jw80hTY6Xes01kJ1.S/PM4aMXaesyIRgthSwDSVLe',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 2,
      text: 'Minus ut nihil.',
      UserId: 2,
      RestaurantId: 2,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ksqCnkzIO9N9jw80hTY6Xes01kJ1.S/PM4aMXaesyIRgthSwDSVLe',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 3,
      text: 'Et dolores eius dolore id numquam.',
      UserId: 1,
      RestaurantId: 3,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$4CP0TARxPqzDP4EoM45pyezwbK0Ea14oda2SSFLaIL.flfmvv7r3O',
        isAdmin: true,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 4,
      text: 'Saepe suscipit voluptatem exercitationem saepe distinctio.',
      UserId: 3,
      RestaurantId: 4,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$4nrzj/KPPGL8IcAKwy6yM.Rz7rAcE5kSHlZq4E0LuHaiPerE5evpG',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 5,
      text: 'Doloremque qui ipsum.',
      UserId: 1,
      RestaurantId: 5,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$4CP0TARxPqzDP4EoM45pyezwbK0Ea14oda2SSFLaIL.flfmvv7r3O',
        isAdmin: true,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 6,
      text: 'Consectetur voluptatem exercitationem.',
      UserId: 2,
      RestaurantId: 6,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ksqCnkzIO9N9jw80hTY6Xes01kJ1.S/PM4aMXaesyIRgthSwDSVLe',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 7,
      text: 'Eum aut placeat.',
      UserId: 1,
      RestaurantId: 7,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$4CP0TARxPqzDP4EoM45pyezwbK0Ea14oda2SSFLaIL.flfmvv7r3O',
        isAdmin: true,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 8,
      text: 'Et et ipsam nisi.',
      UserId: 3,
      RestaurantId: 8,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$4nrzj/KPPGL8IcAKwy6yM.Rz7rAcE5kSHlZq4E0LuHaiPerE5evpG',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 9,
      text: 'Excepturi harum nesciunt perspiciatis ea rerum.',
      UserId: 3,
      RestaurantId: 9,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$4nrzj/KPPGL8IcAKwy6yM.Rz7rAcE5kSHlZq4E0LuHaiPerE5evpG',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 10,
      text: 'Suscipit voluptatibus ut nam error nihil ea quas.',
      UserId: 3,
      RestaurantId: 10,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      User: {
        id: 3,
        name: 'user2',
        email: 'user2@example.com',
        password:
          '$2a$10$4nrzj/KPPGL8IcAKwy6yM.Rz7rAcE5kSHlZq4E0LuHaiPerE5evpG',
        isAdmin: false,
        image: null,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      Restaurant: {
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
      },
    },
  ],
}

export default {
  components: {
    Navbar,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    }
  },
  methods: {
    fetchFeeds() {
      const { restaurants, comments } = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter(
        (comment) => comment.Restaurant && comment.text
      )
    },
  },
  created() {
    this.fetchFeeds()
  },
}
</script>
