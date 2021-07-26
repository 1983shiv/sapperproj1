<script>
  import moment from "moment";
  export let title = "New Year's Day";
  export let date;
  // export let excerpt;
  export let imgsrc;
  export let left = true;
  export let eventID;
  export let slug;
</script>

<div class="timeline">
  <div class="container" class:left class:right={!left} id={eventID}>
    <div class="content">
      <div class="w-full cover">
        <div class="shadow rounded-lg overflow-hidden">
          <a class="mt-2" href="articles/{slug}" {title}>
            <img
              class="w-full object-cover object-center overflow-hidden max-h-60"
              src={imgsrc}
              alt={title}
              width="200px"
              height="120px"
            />

            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {title}
              </h1>
              {moment(date).format("Do MMMM YYYY")}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Container around content */
  .timeline {
    position: relative;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #f4f4f4;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
      display: none;
    }
    .container::after {
      display: none;
    }
  }
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: #fff;
    width: 39%;
  }

  /* The circles on the timeline */
  .container::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -25px;
    background-color: #fff;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 10%;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #f9f9f9;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #f9f9f9;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #f9f9f9;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f9f9f9 transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  .left::after {
    /* right: 50%; */
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    background-color: #f9f9f9;
    position: relative;
    border-radius: 6px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */

  @media screen and (min-width: 601px) and (max-width: 900px) {
    .content {
      padding: 0;
    }
  }
  @media screen and (max-width: 600px) {
    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 0px;
      display: none;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
      display: none;
    }

    .left {
      left: 0;
    }
    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
</style>
